import QRCode from 'qrcode'
import { ElMessage } from 'element-plus'
import { jsPDF } from 'jspdf'

export interface QrDownloadOption {
  qrContent: string
  title: string
}

export interface CodeOptions {
  version?: number
  type?: 'image/jpeg' | 'image/png' | 'image/webp'
  quality?: number
  margin?: number
  scale?: number
  width?: number
  color?: {
    dark: string
    light: string
  }
}

type QrcodeFn = {
  toDataURL: (content: string, options?: CodeOptions) => Promise<string>
  downLoadQRCode: (content: string, fileName?: string, options?: CodeOptions) => Promise<void>
  batchDownloadQrCode: (contentList: OptionItem[], fileName?: string) => Promise<void>
}

export const qrCode: QrcodeFn = {
  toDataURL: async (content: string, options?: CodeOptions) =>
    await QRCode.toDataURL(content, options),
  downLoadQRCode: async (content: string, fileName = '二维码.png', options?: CodeOptions) => {
    try {
      const qrCode = await QRCode.toDataURL(content, options)
      const link = document.createElement('a')
      link.download = fileName
      link.href = qrCode
      link.click()
    } catch (error) {
      ElMessage.error('下载文件失败')
    }
  },
  batchDownloadQrCode: async (data: QrDownloadOption[], fileName = '二维码.pdf') => {
    // 引入jspdf库所需要的字体文件 https://blog.csdn.net/qq_37855074/article/details/114976456
    await import('./font/FZHTK-normal.js')
    const pdf = new jsPDF()
    pdf.setFont('FZHTK')
    const fontSize = 16
    pdf.setFontSize(fontSize)
    const pageWidth = pdf.internal.pageSize.getWidth()
    const imgWidth = pageWidth // 二维码宽度
    const imgHeight = pageWidth // 二维码高度
    const textMaxLength = Math.floor(imgWidth / 2) // 文本最大长度
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      const url = await QRCode.toDataURL(item.qrContent)
      pdf.addImage(url, 'PNG', 0, 0, imgWidth, imgHeight)
      const text = item.title || ''
      if (text.length) {
        // 设置文字居中显示
        const textWidth = Math.min(pdf.getTextWidth(text, fontSize), textMaxLength)
        const x = (pdf.internal.pageSize.getWidth() - textWidth) / 2
        pdf.text(text, x, imgHeight + 5, {
          align: 'left',
          maxWidth: textMaxLength
        })
      }
      if (i < data.length - 1) {
        pdf.addPage()
      }
    }
    pdf.save(fileName)
  }
}

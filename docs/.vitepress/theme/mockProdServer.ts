import { createProdMockServer } from "vite-plugin-mock/client";
import dictMocks from "../../mock/dict";
import monitorMocks from "../../mock/monitor";

export async function setupProdMockServer() {
  const mockModules = [...dictMocks, ...monitorMocks];
  await createProdMockServer(mockModules);
}

import { openDB } from "idb";


const NOME_BANCO = "CentralOS_DB";
const VERSAO_BANCO = 1;

async function iniciarDB() {
  const db = await openDB(NOME_BANCO, VERSAO_BANCO, {
    upgrade(db, oldVersion, newVersion, transaction) {
      // Criar object store "tasks" se não existir
      if (!db.objectStoreNames.contains("modelo_script")) {
        const store = db.createObjectStore("modelo_script", {
          keyPath: "id",
          autoIncrement: true
        });
      }
    }
  });

  console.log("Banco aberto:", db.name, "v", db.version);
  return db;
}

export default iniciarDB;
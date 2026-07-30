import { openDB } from "idb";


const NOME_BANCO = "CentralOS_DB";
const VERSAO_BANCO = 3;

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

      if (!db.objectStoreNames.contains("ordens_servico")) {
        const store = db.createObjectStore("ordens_servico", {
          keyPath: "id",
          autoIncrement: true
        });
        store.createIndex("categoria", "categoria", { unique: false });
        store.createIndex("cliente", "cliente", { unique: false });
        store.createIndex("data_criacao", "data_criacao", { unique: false });
      }

      if (!db.objectStoreNames.contains("equipamentos_troca")) {
        const store = db.createObjectStore("equipamentos_troca", {
          keyPath: "id",
          autoIncrement: true
        });
        store.createIndex("inseridos", "inseridos", { unique: false });
        store.createIndex("retirados", "retirados", { unique: false });
        store.createIndex("data", "data", { unique: false });
        store.createIndex("cod_conexao", "cod_conexao", { unique: false });
        store.createIndex("pppoe", "pppoe", { unique: false });
        store.createIndex("id_os_pai", "id_os_pai", { unique: false });
      }
    }
  });

  console.log("Banco aberto:", db.name, "v", db.version);
  return db;
}

export default iniciarDB;
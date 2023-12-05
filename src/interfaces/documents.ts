// Интерфейс для документа
export interface Document {
  _id: string;
  fileName: string;
  title: string;
  body: string;
  createdAt: string;
  isViewing: boolean;
}

// Интерфейс для начального состояния с массивом документов
export interface DocumentInitialState {
  documents: Document[] | null | [];
  filterDoc: Document | null | [];
}

export interface DocumentPayload {
  _id: string;
}

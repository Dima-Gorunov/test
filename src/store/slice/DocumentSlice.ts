import { Document, DocumentPayload } from "@interfaces/documents";
import { defApi } from "@/services/ClientApi";
import { DocumentInitialState } from "@interfaces/documents";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DocumentInitialState = {
  documents: null,
  filterDoc: null,
};

const DocumentSlice = createSlice({
  name: "FileSlice",
  initialState,
  reducers: {
    setDocuments(state: DocumentInitialState, { payload }) {
      const data: Document[] = payload;
      const dataWithView = data.map((item) => {
        item.isViewing = false;
        item.createdAt = item.createdAt.replace(/\s+/g, "");
        return item;
      });
      state.documents = dataWithView;
    },

    setActive(state: DocumentInitialState, { payload }) {
      const { _id }: DocumentPayload = payload;
      if (state.documents !== null) {
        const index = state.documents?.findIndex((item) => item._id === _id);
        if (index !== -1) {
          if (state.documents[index].isViewing) {
            state.documents[index].isViewing = false;
          } else {
            const indexT = state.documents?.findIndex((item) => item.isViewing);
            if (indexT !== -1) {
              state.documents[indexT].isViewing = false;
            }
            state.documents[index].isViewing = true;
          }
        }
      }
    },
  },
});

export const getDocumentsThunk = () => {
  return async (dispatch) => {
    try {
      const response = await defApi.getDocuments();
      dispatch(setDocuments(response.data));
    } catch (error) {
    } finally {
    }
  };
};

export const { setDocuments, setActive } = DocumentSlice.actions;

export default DocumentSlice;

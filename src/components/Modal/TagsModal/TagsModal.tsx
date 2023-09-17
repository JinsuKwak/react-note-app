import React, { useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toggleTagsModal } from "../../../store/modal/modalSlice";
import { removeTags } from "../../../store/notesList/notesListSlice";
import { addTags, deleteTags } from "../../../store/tags/tagSlice";
import { Tag } from "../../../types/tag";
import getStandardName from "../../../utils/getStandardName";
import { DeleteBox, FixedContainer } from "../Modal.styles";
import { Box, StyledInput, TagsBox } from "./TagsModal.styles";

interface TagsModalProps {
  type: string;
  addedTags?: Tag[];
  handleTags?: (tagName: string, type: string) => void;
}

const TagsModal = ({ type, addedTags, handleTags }: TagsModalProps) => {
  const dispatch = useAppDispatch();
  const { tagsList } = useAppSelector((state) => state.tags);
  const [inputText, setInputText] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputText) {
      return;
    }

    dispatch(addTags({ tagName: inputText.toLocaleLowerCase(), id: v4() }));
    setInputText("");
  };

  const deleteTagsHandler = (tagName: string, id: string) => {
    dispatch(deleteTags(id));
    dispatch(removeTags({ tagName }));
  };

  return (
    <FixedContainer>
      <Box>
        <div className="editTags__header">
          <div className="editTags__title">
            {type === "add" ? "ADD" : "Edit"} Tags
          </div>
          <DeleteBox
            className="editTags__close"
            onClick={() => dispatch(toggleTagsModal({ type, view: false }))}
          >
            <FaTimes />
          </DeleteBox>
        </div>

        <form onSubmit={submitHandler}>
          <StyledInput
            type="text"
            value={inputText}
            placeholder="new tag..."
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
        <TagsBox>
          {tagsList.map(({ tagName, id }) => (
            <li key={id}>
              <div className="editTags__tag">{getStandardName(tagName)}</div>
              {type === "edit" ? (
                <DeleteBox onClick={() => deleteTagsHandler(tagName, id)}>
                  <FaTimes />
                </DeleteBox>
              ) : (
                <DeleteBox>
                  {addedTags?.find(
                    (addedTag: Tag) =>
                      addedTag.tagName === tagName.toLowerCase()
                  ) ? (
                    <FaMinus onClick={() => handleTags!(tagName, "remove")} />
                  ) : (
                    <FaPlus onClick={() => handleTags!(tagName, "add")} />
                  )}
                </DeleteBox>
              )}
            </li>
          ))}
        </TagsBox>
      </Box>
    </FixedContainer>
  );
};

export default TagsModal;

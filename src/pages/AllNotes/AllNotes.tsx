import React, { useState } from "react";
import { FiltersModal } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleFiltersModal } from "../../store/modal/modalSlice";
import { ButtonOutline, Container, EmptyMsgBox } from "../../styles/styles";
import { Box, InputBox, TopBox } from "./AllNotes.styles";
import getAllNotes from "../../utils/getAllNotes";

const AllNotes = () => {
  const dispatch = useAppDispatch();
  const { mainNotes } = useAppSelector((state) => state.notesList);
  const { veiwFiltersModal } = useAppSelector((state) => state.modal);
  const [filter, setFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const clearHandler = () => {
    setFilter("");
  };

  return (
    <Container>
      {veiwFiltersModal && (
        <FiltersModal
          handleFilter={filterHandler}
          handleClear={clearHandler}
          filter={filter}
        />
      )}

      {mainNotes.length === 0 ? (
        <EmptyMsgBox>No Notes...</EmptyMsgBox>
      ) : (
        <>
          <TopBox>
            <InputBox>
              <input
                type={"text"}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter Note Title"
              />
            </InputBox>

            <div className="notes__filter-btn">
              <ButtonOutline
                onClick={() => dispatch(toggleFiltersModal(true))}
                className="nav__btn"
              >
                <span>Sort</span>
              </ButtonOutline>
            </div>
          </TopBox>

          <Box>
            {/* Notes */}
            {getAllNotes(mainNotes, filter)}
          </Box>
        </>
      )}
    </Container>
  );
};

export default AllNotes;

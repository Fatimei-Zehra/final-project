//!FATIME
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styleSearch from "../Search/Search.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { useState } from 'react';
import Modal from 'react-modal';
import { RiCloseCircleLine } from "react-icons/ri";
import SearchStyle from "./Search.module.css"
import { useTranslation } from "react-i18next";


function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleOpenModal = () => {
    // setIsOpen(true);
    setIsTransitioning(true);
    setTimeout(() => setIsOpen(true), 300);
  };

  const handleCloseModal = () => {
    // setIsOpen(false);
    setIsTransitioning(false);

    setTimeout(() => setIsOpen(false), 300);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {

    console.log(`Searching for: ${searchTerm}`);

    handleCloseModal();
  }
  const { t } = useTranslation();
  return (
    <div>
      <form action="#" className={styleSearch.form} id='form'>
        <input type="text" className={styleSearch.input} placeholder={t('What are you looking for?')} />
        <FontAwesomeIcon icon={faSearch} className={styleSearch.searchIcon} onClick={handleOpenModal} />
      </form>


      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Search Modal"  className={SearchStyle.modalItem}>
          <div className={SearchStyle.modal}>
        <input
          type="text"
          placeholder={t("Enter to search ")}
          value={searchTerm}
          onChange={handleInputChange}
        className={SearchStyle.inputSearch} />
        <RiCloseCircleLine onClick={handleCloseModal} className={SearchStyle.closeModal} />
          </div>
      </Modal>
    </div>
  )
}




export default Search




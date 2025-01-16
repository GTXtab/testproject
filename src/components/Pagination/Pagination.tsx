import React from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const handlePrevious = () => {
    paginate(Math.max(currentPage - 1, 1));
  };

  const handleNext = () => {
    paginate(Math.min(currentPage + 1, totalPages));
  };

  const getPaginationRange = () => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages - 1, totalPages];
    }

    if (currentPage > totalPages - 3) {
      return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const paginationRange = getPaginationRange();

  return (
    <div className={styles.pagBlock}>
      <section className={styles.pagPC}>
        <button
          className={styles.pagButton}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <section className={styles.pagButtons}>
          {paginationRange.map((page) => (
            <button
              className={`${page === currentPage ? styles.active : styles.pagItem}`}
              onClick={() => typeof page === "number" && paginate(page)}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
        </section>
        <button
          className={styles.pagButton}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </section>
      <section className={styles.pagForPhone}>
        <button
          className={styles.pagButton}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          ←
        </button>
        <span className={`${styles.pageInfo} ${styles.mobilePageInfo}`}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={styles.pagButton}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </section>
    </div>
  );
};

export default Pagination;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const generatePageNumbers = () => {
    const pages = [];

    // Always show the first page
    pages.push(1);

    // Add dots before the current range if needed
    if (currentPage > 3) {
      pages.push('...');
    }

    // Show pages around the current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Add dots after the current range if needed
    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    // Always show the last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex justify-center items-center space-x-2 py-4">
      {/* Left Navigation Icon */}
      <FontAwesomeIcon
        icon={faCaretLeft}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={`w-8 h-8 cursor-pointer ${
          currentPage === 1
            ? 'text-gray-600 cursor-not-allowed'
            : 'text-white hover:text-gray-400'
        }`}
      />

      {/* Page Numbers */}
      {pageNumbers.map((page, index) =>
        page === '...' ? (
          <span
            key={index}
            className="w-8 h-8 flex items-center justify-center text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold ${
              currentPage === page
                ? 'bg-white text-black'
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Right Navigation Icon */}
      <FontAwesomeIcon
        icon={faCaretRight}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className={`w-8 h-8 cursor-pointer ${
          currentPage === totalPages
            ? 'text-gray-600 cursor-not-allowed'
            : 'text-white hover:text-gray-400'
        }`}
      />
    </div>
  );
}

import swal from 'sweetalert2';

const confirmationMessage = ({
    title = 'Do you want to delete?',
    text = 'once done, you cannot undo this action.',
    confirmText = 'yes, delete',
    cancelText = 'No, undo.'
}) => {
    return swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    })
}

// success and error
const showSuccessMessage = ({ title = 'Successful procedure', text = '', html = '' }) => {
    return swal.fire({
        title,
        text,
        html,
        icon: 'success',
    })
}

const showErrorMessage = ({ title = 'An error occurred', text = '', html = '' }) => {
    return swal.fire({
        title,
        text,
        html,
        icon: 'error',
    })
}

const showWarningMessage = ({ title = 'Stop right there', text = '', html = '' }) => {
    return swal.fire({
        title,
        text,
        html,
        icon: 'warning',
    })
}


/**
 * show sweetalert2 loading spinner
 * @param title
 * @param text
 */
const showLoading = ({ title = '', text = '' }) => {
    return swal.fire({
        title,
        text,
        onOpen: () => swal.showLoading()
    })
}

/**
 * hide sweetalert2 loading spinner
 */
const hideLoading = () => {
    return swal.close();
}

export {
    showLoading,
    hideLoading,
    confirmationMessage,
    showSuccessMessage,
    showErrorMessage,
    showWarningMessage
}
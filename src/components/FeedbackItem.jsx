import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({ item }) {
    const { id, rating, text } = item

    const { handleDelete, handleEdit } = useContext(FeedbackContext)

    return (
        <Card reverse={false}>
            <div className="num-display">{rating}</div>
            <button className="close" onClick={() => handleDelete(id)}>
                <FaTimes color="purple"></FaTimes>
            </button>
            <button className="edit">
                <FaEdit color="purple" onClick={() => handleEdit(item)}></FaEdit>
            </button>
            <div className="text-display">{text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem

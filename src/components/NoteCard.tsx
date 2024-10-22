import { Badge, Card, Stack } from "react-bootstrap"
import { Tag } from "../App"
import { Link } from "react-router-dom"
import styles from '../NoteList.Module.css'

export type SimplifiedNote = {
    tags: Tag[]
    title: string
    id: string
}

/**
 * NoteCard Component
 * 
 * This component renders an individual note card using the Bootstrap Card component.
 * The card is clickable and links to a detaied view of the note, based on its ID.
 * It displays the note's title and assiciated tags (if any)
 */

const NoteCard = ({ id, title, tags }: SimplifiedNote) => {
    return (
        <Card as={Link} to={`/${id}`} className={`h-100 text-reset text-decoration-none shadow-sm ${styles.card} bg-light`}>
            <Card.Body>
                {/* Title */}
                <span className="fs-5 fw-semibold">{title}</span>
                {/* If there are tags, render them as Bootstrap badges */}
                {
                    tags.length > 0 && (
                        <Stack
                            gap={1}
                            direction="horizontal"
                            className="justify-content-center flex-wrap mt-1"
                        >
                            {
                                tags.map(tag => (
                                    <Badge className="text-truncate" key={tag.id}>
                                        {tag.label}
                                    </Badge>
                                ))
                            }
                        </Stack>
                    )
                }
            </Card.Body>
        </Card>
    )
}

export default NoteCard;
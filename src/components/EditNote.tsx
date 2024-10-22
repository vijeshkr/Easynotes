import { NoteData, Tag } from "../App";
import NoteForm from "./NoteForm";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}

const EditNote = ({onSubmit, onAddTag, availableTags}: EditNoteProps) => {
    // Retrieve the current note data using the useNote custom hook
    const note = useNote();

    return (
        <div className="mb-4">
            <h1>Edit Note</h1>
            <NoteForm 
            title={note.title}
            markdown={note.markdown}
            tags={note.tags}
            onSubmit={data => onSubmit(note.id, data)} 
            onAddTag={onAddTag} 
            availableTags={availableTags} />
        </div>
    )
}

export default EditNote;
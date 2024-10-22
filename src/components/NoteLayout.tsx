import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom"
import { Note } from "../App";

type NoteLayoutProps = {
    notes: Note[]
}

/**
 * NoteLayout Component
 * 
 * This component handles layout and routing for individual notes.
 * It extracts the note ID from the URL parameters, finds the corresponding
 * note in the provided notes array, and renders the correct child route based on context.
 * If no note is found for the given ID, it redirects to the home page.
 */

export const NoteLayout = ({ notes }: NoteLayoutProps) => {
    // Extract the `id` parameterr from the URL
    const { id } = useParams();
    // Find the note with the matching ID from the notes array
    const note = notes.find(n => n.id === id);

    // If the note is not found, navigate back to the home page
    if (note == null) return <Navigate to='/' replace />
    // If the note is found, render child route with the note as context
    return <Outlet context={note} />
}

// Custom hook to access the current note context.
export const useNote = () => {
    return useOutletContext<Note>()
}
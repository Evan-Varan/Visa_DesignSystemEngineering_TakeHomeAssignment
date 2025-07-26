import Snippet from './Snippet';
import EmptySavedSnippets from './EmptySavedSnippets';
function SavedSnippetsContainer({ snippets }: { snippets: any[] }) {
  if (snippets.length === 0) {
    return <EmptySavedSnippets />; //If no snippets, show empty saved snippets file
  }

  return (
    <div>
      {snippets.map((snippet) => (
        <Snippet key={snippet.id} snippet={snippet} />
      ))}
    </div>
  );
}

export default SavedSnippetsContainer; 
export default function FirstComponent() {
    return (
        <div className="FirstComponent">First Component</div>
    )
}

// Only one default export per file
export function InnerComponent() {
    return (
        <div className="InnerComponent">Inner Component</div>
    )
}

const person = { // Constant class
    name: 'Tony',
    address: { // Inner class
        line1: 'Baker Street',
        city: 'London',
        country: 'UK'
    },
    profiles: ['twitter', 'linkedin', 'instagram'], // Array
    printProfile: () => {
        person.profiles.map(
            (profile) => console.log(profile)
        )

       // console.log(person.profiles[0])
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.address.country}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}
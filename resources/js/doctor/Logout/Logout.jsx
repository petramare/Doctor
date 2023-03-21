export default function Logout(){

    const logout = async () => {

        const response = fetch('/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })

        if (response.status === 204) {
            // setUser(false);
            getUserInformation();
        }
    }

    return (
        <button
            onClick={ logout }
        >
            Logout
        </button>
    )
}



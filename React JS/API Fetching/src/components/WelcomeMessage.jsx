const WelcomeMessage = ({onGetPostClick}) =>{
    return (
        <>
        <center><h1 className="welcome-message">There are no posts </h1></center>
        <button type="button" class="btn btn-primary" onClick={onGetPostClick}>Fetch Posts</button>
        </>
    )
}

export default WelcomeMessage ; 
function App() {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
    // TODO: Should split into a separated api file instead of using fetch directly
                const queryParamsString = queryString.stringify();
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?
    _limit=10`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                const { data, pagination } = responseJSON;
                console.log({ data, pagination });
                setPostList(data);
            } catch (error) {
                console.log('Failed to fetch posts: ', error.message);
            }
        }
        fetchData();
    }, []);
    return <div>Post list length: {postList.length}</div>;
}
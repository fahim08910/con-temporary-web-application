import Search from 'app/ui/search';
import SearchResults from 'app/ui/searchresults';

function Page({searchParams}) {
	return(
		<div>
		<Search />
		<SearchResults artist={searchParams.artist} />
		</div>
	);
}

export default Page;

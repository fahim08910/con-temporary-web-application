import Slow from 'app/ui/slow';
import SuspenseLoading from 'app/ui/suspenseloading';
import { Suspense } from 'react';

function Page() {
    return (
        <Suspense fallback={<SuspenseLoading />}>
            <Slow />
        </Suspense>
    );
}

export default Page;

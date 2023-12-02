async function Page() {
    function pauser(timeout) {
        return new Promise((resolve) => {
            setTimeout(resolve, timeout);
        });
    }

    await pauser(3000);
    return <p>Content loaded!</p>;
}

export default Page;

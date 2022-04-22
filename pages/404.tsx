import Link from 'next/link';
import Metatags from '../components/Metatags';

export default function Custom404() {
    return (
        <main>
            <Metatags title="404 Not Found" />
            <h1>404 - That page does not seem to exist...</h1>
            <Link href="/" passHref={true}>
                <button className="btn-blue">Go home</button>
            </Link>
        </main>
    );
}
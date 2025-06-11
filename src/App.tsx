import '@/assets/fonts/Mont/stylesheet.css';
import '@/assets/stylesheets/global.css';

import { Panel } from '@/components/Panel/Panel';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export const App = () => {
    return (
        <>
            <main style={{ background: 'green' }}>
                <Sidebar />
                <Panel />
            </main>
        </>
    );
};


import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import "styles/globals.css";
import { api } from "utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
    // eslint-disable-next-line react/prop-types
    Component,
    // eslint-disable-next-line react/prop-types
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);

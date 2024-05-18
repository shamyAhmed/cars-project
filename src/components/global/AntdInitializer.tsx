import React, { PropsWithChildren } from "react";
import { mainColor } from "../../constants";
import { ConfigProvider } from "antd";

const AntdInitializer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: mainColor,
                }
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default AntdInitializer;
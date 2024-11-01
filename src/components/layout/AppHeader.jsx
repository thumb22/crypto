import { Button, Layout, Select, Space, Modal } from "antd";
import { useCrypto } from "../../context/crypto-context";
import React from "react";
import CoinInfoModal from "../CoinInfoModal";

const headerStyle = {
    width: "100%",
    textAlign: "center",
    height: 60,
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const AppHeader = () => {
    const [select, setSelect] = React.useState(false);
    const [coin, setCoin] = React.useState(null);
    const [modal, setModal] = React.useState(false);
    const { crypto } = useCrypto();

    React.useEffect(() => {
        const keypress = (event) => {
            if (event.key === "/") {
                setSelect((prev) => !prev);
            }
        };
        document.addEventListener("keypress", keypress);
        return;
    }, []);

    function handleSelect(value) {
        setCoin(crypto.find((c) => c.id === value));
        setModal(true);
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                    width: 250,
                }}
                open={select}
                onSelect={handleSelect}
                onClick={() => setSelect((prev) => !prev)}
                value="press / to open"
                options={crypto.map((coin) => ({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                    <Space>
                        <img
                            style={{ width: 20 }}
                            src={option.data.icon}
                            alt={option.data.name}
                        />{" "}
                        {option.data.label}
                    </Space>
                )}
            />

            <Button type="primary">Add Asset</Button>

            <Modal open={modal} onCancel={() => setModal(false)} footer={null}>
                <CoinInfoModal coin={coin} />
            </Modal>
        </Layout.Header>
    );
};

export default AppHeader;

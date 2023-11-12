import { useEffect, useState } from "react";
import { SERVER_DATA_MAP, TAB_LIST } from "./backend/server";
import { lruCache } from "./LRUCache/LRUCache";

const useApp = () => {
    const [tabData, setTabData] = useState<string>("");
    const [selectedTabId, setSelectedTabId] = useState<string | null>(null);

    useEffect(() => {
        setSelectedTabId(TAB_LIST[0].id);
        setTabData(SERVER_DATA_MAP.get(TAB_LIST[0].id));
        lruCache.putData(TAB_LIST[0].id, SERVER_DATA_MAP.get(TAB_LIST[0].id));
    }, []);

    // UI handlers
    function tabClickHandler(tabId: string) {
        return function () {
            if (tabId !== selectedTabId) {
                setSelectedTabId(tabId);
                const data = fetchTabData(tabId);
                setTabData(data);
            }
        }
    }

    //Business logics
    function fetchTabData(tabId: string): string {
        let data: string = "";
        if (lruCache.map.has(tabId)) {
            data = lruCache.getData(tabId);
        }
        else {
            //fetch from server and put into cache
            data = SERVER_DATA_MAP.get(tabId);
            lruCache.putData(tabId, data);
        }

        return data;
    }

    return {
        tabData,
        TAB_LIST,
        selectedTabId,
        tabClickHandler
    }
}

export default useApp;
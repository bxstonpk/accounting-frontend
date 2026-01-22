type Kpi = {
    title: string;
    value: string;
    delta?: string;
}

type LowStockItem = {
    id: string;
    name: string;
    stock: number;
    uom: string;
    rrp: number;
}

type RecentAction = {
    type: string;
    date: string;
    description: string;
}

export const DataController = () => {
    let Kpi = [] as Kpi[],
        lowStockItems = [] as LowStockItem[],
        recentActions = [] as RecentAction[];

    // impement later after backend is ready
    return { Kpi, lowStockItems, recentActions };
}
type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
};

declare function readData(): Task[];

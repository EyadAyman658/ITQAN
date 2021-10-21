export interface State
{
    lang:string
}

export type StoreApi=
{
    state:State;
    setContext: React.Dispatch<React.SetStateAction<State>>;
}
export default interface Props {
    children: React.ReactNode[];
}
import S from './Container.module.scss'
const Container = ({ children }) => {
    return (
        <div className={S.container}>
            {children}
        </div>
    );
};

export default Container;
import * as express from 'express';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json([{
        id: 1,
        label: 'Name',
        component: 'PronitInput',
        className: 'border border-primary',
        columnWidth: 200,
        editMode: false,
        data: 'adsfadf',
    },
    {
        id: 2,
        label: 'Last Name',
        component: 'PronitInput',
        className: 'border border-primary',
        columnWidth: 150,
        editMode: true,
        data: 'adsfdasfdsafadf',
    }]);
});

export default router;
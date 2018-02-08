export const selectPlan = plan => ({
    type: 'PLAN_SELECTED',
    payload: plan
});

export const selectVersion = version => ({
    type: 'VERSION_SELECTED',
    payload: version
});

export const selectDate = date => ({
    type: 'DATE_SELECTED',
    payload: date
})
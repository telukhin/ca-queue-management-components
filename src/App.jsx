import React from 'react';
import SearchableDropDown from "./components/SearchableDropDown";
import TextFieldElement from "./components/TextFieldElement";
import CheckboxElement from "./components/CheckboxElement";
import Modal from "./components/Modal";

const options = [
    {label: 'Adelaide', value: 'adelaide'},
    {label: 'Brisbane', value: 'brisbane'},
    {label: 'Canberra', value: 'canberra'},
    {label: 'Darwin', value: 'darwin'},
    {label: 'Hobart', value: 'hobart'},
    {label: 'Melbourne', value: 'melbourne'},
    {label: 'Perth', value: 'perth'},
    {label: 'Sydney', value: 'sydney'},
];

const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                width: '400px',
                margin: '0 auto',
                minHeight: '60vh',
                flexDirection: 'column',
            }}
        >
            <Modal
                onSubmit={console.log}
                modalButton={"Add New Cohort To Team"}
                modalTitle={"Add New Cohort To Team"}
                buttonValue={"Add"}
            >
                <SearchableDropDown
                    label={"Select Project"}
                    name={"project"}
                    id={"project"}
                    options={options}
                />

                <SearchableDropDown
                    label={"Select Team"}
                    name={"team"}
                    id={"team"}
                    options={options}
                />

                <TextFieldElement
                    name={"name"}
                    label={"Name"}
                />

                <CheckboxElement
                    name={"access-level"}
                    label={"Special Cohort"}
                    value={"Yes"}
                />

                <TextFieldElement
                    name={"cohortRank"}
                    label={"Cohort rank"}
                />

                <SearchableDropDown
                    label={"Geo"}
                    name={"geo"}
                    id={"geo"}
                    options={options}
                />

                <TextFieldElement
                    name={"queueFilter"}
                    label={"GSAC Queue Filter"}
                />

                <TextFieldElement
                    name={"hardLimit"}
                    label={"Hard Limit"}
                />
            </Modal>
        </div>
    );
};

export default App;
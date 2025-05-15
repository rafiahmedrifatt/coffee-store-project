import React from 'react';

const AddCoffee = () => {
    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const coffeeData = Object.fromEntries(formData.entries())

        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(coffeeData)
        }).then(res => res.json()).then(data => console.log(data))
    }
    return (
        <div>
            <h1 className='text-4xl text-center'>Add New Coffee</h1>
            <p className='text-center w-8/12 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleSubmit} className='md:grid gap-5 gap-y-5'>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name</legend>
                    <input type="text" className="input w-full" name='name' placeholder="Enter Coffee Name Here" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Price</legend>
                    <input type="number" className="input w-full" name='price' placeholder="Enter Coffee Chef" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Supplier</legend>
                    <input type="text" className="input w-full" name='supplier' placeholder="Enter Coffee Supplier" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Taste</legend>
                    <input type="text" className="input w-full" name='taste' placeholder="Enter Coffee Taste" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Category</legend>
                    <input type="text" className="input w-full" name='category' placeholder="Enter Coffee Category" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Details</legend>
                    <input type="text" className="input w-full" name='details' placeholder="Enter Coffee Details" />
                </fieldset>
                <fieldset className="fieldset col-span-2">
                    <legend className="fieldset-legend">Photo</legend>
                    <input type="text" className="input w-full" name='photo' placeholder="Enter Coffee Photo URL" />
                </fieldset>
                <button type="submit" className='btn btn-primary col-span-2'>Submit</button>
            </form>
        </div>
    );
};

export default AddCoffee;
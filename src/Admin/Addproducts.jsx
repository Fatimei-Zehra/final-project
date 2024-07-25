
import React, { useState, useEffect } from 'react';
import AddCss from '../Admin/Add.module.css';
import { HiMenu, HiX } from 'react-icons/hi';
import { SidebarData } from '../Server/Sidebar';
import { db, imgDB } from "../../src/firebase/firebase";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';


const AddProducts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [items, setItems] = useState([]);
    const [editingItemId, setEditingItemId] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [isBest, setIsBest] = useState(false);
    const [isDiscount, setIsDiscount] = useState(false);
    const [discountPercent, setDiscountPercent] = useState(0);




    useEffect(() => {
        fetchItems();
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsBest(false);
        setIsDiscount(false);
        setDiscountPercent(0);
        let newImageUrl = imageUrl;

        if (image) {
          
            const imageRef = ref(imgDB, `images/${image.name}`);
            await uploadBytes(imageRef, image);
            newImageUrl = await getDownloadURL(imageRef);
        }

        if (editingItemId) {

            const itemDoc = doc(db, 'items', editingItemId);
            await updateDoc(itemDoc, { name, price, imageUrl: newImageUrl, isBest, discount : discountPercent});
            setEditingItemId(null);
        } else {
            await addDoc(collection(db, 'items'), { name, price, imageUrl: newImageUrl, isBest, discount : discountPercent });
        }

        setName('');
        setPrice('');
        setImage(null);
        setImageUrl('');
        fetchItems();
    };

    const handleEdit = (item) => {
        setName(item.name);
        setPrice(item.price);
        setImageUrl(item.imageUrl);
        setImage(null);
        setEditingItemId(item.id);
    };

    const handleDelete = async (itemId, imageUrl) => {

        const imageRef = ref(imgDB, imageUrl);
        await deleteObject(imageRef);


        await deleteDoc(doc(db, 'items', itemId));
        fetchItems();
    };

    const fetchItems = async () => {
        const querySnapshot = await getDocs(collection(db, 'items'));
        const itemsList = [];
        querySnapshot.forEach((doc) => {
            itemsList.push({ id: doc.id, ...doc.data() });
        });
        setItems(itemsList);
    };



    return (
        <div className='container' style={{ display: 'flex', marginTop: '30px' }}>
            <div className={AddCss.dropMenu}>
                <HiMenu className={AddCss.menuIcon} onClick={toggleMenu} />

                <div className={`${AddCss.sidebar} ${isOpen ? AddCss.open : ''}`}>
                    <div className={AddCss.sidebarHeader}>
                        <HiX className={AddCss.closeIcon} onClick={closeMenu} />
                    </div>
                    {SidebarData.map((category, index) => (
                        <div key={index} className={AddCss.category}>
                            <h2>{category.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <div style={{ width: '100%' }}>
                <h2>ADD PRODUCTS</h2>
                <hr />

                <form autoComplete='off' onSubmit={handleSubmit} className={AddCss.formGroup}>
                    <div className={AddCss.inputForProduct}>
                        <label htmlFor='product-name'>Product Name:</label>
                        <input
                            type='text'
                            className={AddCss.formControl}
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>

                    <br />
                    <div className={AddCss.inputForProduct}>
                        <label htmlFor='product-price'>Product Price</label>
                        <input
                            type='number'
                            className={AddCss.formControl}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <br />

                    <div className={AddCss.inputForProduct}>
                        <label htmlFor='product-img'>Product Image</label>
                        <input
                            type='file'
                            className={AddCss.formControl}
                            onChange={handleImageChange}
                        />
                    </div>

                    <br />
                    <div className={AddCss.inputForProduct}>
                        <label htmlFor='product-img'>Best Seller</label>
                        <input
                            type="checkbox"
                            className={AddCss.formControl}
                            value={isBest} checked={isBest}
                            onChange={() => setIsBest(!isBest)}
                        />

                    </div>
                    <br />

                    <div className={AddCss.inputForProduct} id='discount'>
                        <label htmlFor='product-img'> Is Discount</label>
                        <input
                            type="checkbox"
                            className={AddCss.formControl}
                            value={isDiscount} checked={isDiscount}
                            onChange={() => setIsDiscount(!isDiscount)}
                        />
                    </div>
                    <br />

                    <div className={AddCss.inputForProduct} id='discount'>
                        {isDiscount && <input type="number" placeholder="Discount %"  className={AddCss.formControl}  onChange={(e) =>  setDiscountPercent(e.target.value)}  />}
                    </div>
                    <br />
                    <button type='submit' className={AddCss.buttonAdd}>
                        {editingItemId ? 'UPDATE' : 'ADD'}
                    </button>
                </form>

                <div>
                    {items.map((item) => (
                        <div key={item.id} className={AddCss.productDetails}>
                            <img src={item.imageUrl} alt={item.name} style={{ width: '120px', height: '120px', objectFit: 'cover', cursor: "pointer" }} />
                            <h3 className={AddCss.productDetailName}>{item.name}</h3>
                            <p className={AddCss.productDetailPrice}>{item.price} $</p>
                            <p className={AddCss.productCheck}>{"Best-" + item.isBest}</p>
                            <p className={AddCss.productCheck}>{"Discount-" + item.discount + "%"}</p>
                            <div className={AddCss.editDeleteButtons}>
                                <button onClick={() => handleEdit(item)} className={AddCss.editBtn}>EDIT</button>
                                <button onClick={() => handleDelete(item.id, item.imageUrl)} className={AddCss.deleteBtn}>DELETE</button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AddProducts;



import React from 'react';
import { Btn, H6, Image } from '../../AbstractElements';
import product1 from '../../assets/images/ecommerce/product-table-1.png';
import product2 from '../../assets/images/ecommerce/product-table-2.png';
import product3 from '../../assets/images/ecommerce/product-table-3.png';
import product4 from '../../assets/images/ecommerce/product-table-4.png';
import product5 from '../../assets/images/ecommerce/product-table-5.png';
import product6 from '../../assets/images/ecommerce/product-table-6.png';

const style = {
  width: 40,
  height: 40
};
const style2 = {
  width: 60, fontSize: 13, padding: 3
};
export const productData = [
  {
    image: <Image attrImage={{ src: product1, style: style, alt: '' }} />,
    Details: <div>
      <H6>Red Lipstick</H6>
      <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs ms-2', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  },
  {
    image: <Image attrImage={{ src: product2, style: style, alt: '' }} />,
    Details: <div>
      <H6>Brown Lipstick</H6>
      <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
    </div>,
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2022/4/19',
    action:
      <div>
        <span>
          <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
        </span>
        <span>
          <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs ms-2', type: 'button' }}>Edit </Btn>
        </span>
      </div >
  },
  {
    image: <Image attrImage={{ src: product3, style: style, alt: '' }} />,
    Details: <div>
      <H6>Yellow Lipstick</H6>
      <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
    </div>,
    amount: '$10',
    stock: <div className='font-danger'>Out of Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
      </span>
      <span>
        <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs ms-2', type: 'button' }}>Edit </Btn>
      </span>
    </div >
  },
  {
    image: <Image attrImage={{ src: product4, style: style, alt: '' }} />,
    Details: <div>
      <H6>Green Lipstick</H6>
      <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
    </div>,
    amount: '$20',
    stock: <div className='font-primary'>Low Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
      </span>
      <span>
        <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs ms-2', type: 'button' }}>Edit </Btn>
      </span>
    </div >
  },
  {
    image: <Image attrImage={{ src: product5, style: style, alt: '' }} />,
    Details: <div>
      <H6>Pink Lipstick</H6>
      <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
    </div>,
    amount: '$30',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
      </span>
      <span>
        <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs ms-2', type: 'button' }}>Edit </Btn>
      </span>
    </div >
  },
  {
    image: <Image attrImage={{ src: product6, style: style, alt: '' }} />,
    Details: <div>
      <H6>Blue Lipstick</H6>
      <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
    </div>,
    amount: '$40',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
      </span>
      <span>
        <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs ms-2', type: 'button' }}>Edit </Btn>
      </span>
    </div >
  },
  {
    image: <Image attrImage={{ src: product2, style: style, alt: '' }} />,
    Details: <div>
      <H6>Grey Lipstick</H6>
      <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
      </span>
      <span>
        <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs ms-2', type: 'button' }}>Edit </Btn>
      </span>
    </div >
  },
  {
    image: <Image attrImage={{ src: product3, style: style, alt: '' }} />,
    Details: <div>
      <H6>Black Lipstick</H6>
      <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
    </div>,
    amount: '$10',
    stock: <div className='font-success'>In Stock</div>,
    start_date: '2022/4/19',
    action: <div>
      <span>
        <Btn attrBtn={{ style: style2, color: 'danger', className: 'btn btn-xs', type: 'button' }}>Delete</Btn>
      </span>
      <span>
        <Btn attrBtn={{ style: style2, color: 'primary', className: 'btn btn-xs ms-2', type: 'button' }}>Edit </Btn>
      </span>
    </div >
  }
];
export const productColumns = [
  {
    name: 'Image',
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },
  {
    name: 'Details',
    selector: (row) => row.Details,
    sortable: true,
    center: true,
    wrap: true
  },
  {
    name: 'Amount',
    selector: (row) => row.amount,
    sortable: true,
    center: true,
  },
  {
    name: 'Stock',
    selector: (row) => row.stock,
    sortable: true,
    center: true,
  },
  {
    name: 'Start_date',
    selector: (row) => row.start_date,
    sortable: true,
    center: true,
  },
  {
    name: 'Action',
    selector: (row) => row.action,
    sortable: true,
    center: true,
  },
];
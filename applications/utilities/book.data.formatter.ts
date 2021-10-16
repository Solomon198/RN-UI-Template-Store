function ExtractBookDescription(htmlString: string) {
  try {
    let lastOpeningStrong = htmlString.lastIndexOf('<strong>');
    let lastClosingStrong = htmlString.lastIndexOf('</strong>');
    let descriptionHeader = htmlString
      .substring(lastOpeningStrong, lastClosingStrong)
      .replace('<strong>', '')
      .replace('<br />', '')
      .replace('\n', '');

    let getDescription = htmlString.indexOf('<p>', lastClosingStrong);
    if (getDescription >= 0) {
      // The next paragraph <p> starts the book description so we get the position of the next paragraph opening tag <p> starting from the position we found ABOUT THE BOOK
      const beginingOfDescription = htmlString.indexOf(
        '<p>',
        lastClosingStrong,
      );
      // use substring to get the description part of the html string which will return the description in an html format in p tag e.g <p> description goes here  </p>
      const descriptionWithHtml = htmlString.substring(
        beginingOfDescription,
        htmlString.length,
      );

      // replace opening and closing tag with empty tag
      const removeTags = descriptionWithHtml
        .replace('<p>', '')
        .replace('</p>', '')
        .replace('\n', '');
      const bookDescription = removeTags;
      return {
        descriptionBody: bookDescription,
        descriptionHeader,
      };
    }

    const orderedInfoList = htmlString.indexOf('<ul>');
    const textHtml = htmlString.substring(orderedInfoList, htmlString.length);
    const removeUlTag = textHtml.replace('<ul>', '').replace('</ul>', '');
    const getListItems = removeUlTag
      .split('<li>')
      .map(item =>
        item
          .replace('<li>', '')
          .replace('</li>', '')
          .replace('\n', '')
          .replace('\n', ''),
      );
    getListItems.shift();

    return {
      descriptionBody: getListItems.join(', \n'),
      descriptionHeader,
    };
  } catch {
    return;
  }
}

function ExtractBookTitle(htmlString: string) {
  const titlePosition = htmlString.indexOf('<strong>Title</strong>');
  const getOpeningCellTagAfterTitle = htmlString.indexOf('<td', titlePosition);
  const getClosingCellTagAfterOpeningCellTag = htmlString.indexOf(
    '</td>',
    getOpeningCellTagAfterTitle,
  );
  const titleCell = htmlString.substring(
    getOpeningCellTagAfterTitle,
    getClosingCellTagAfterOpeningCellTag,
  );
  const getSymbolPos = titleCell.indexOf('>') + 1;
  const title = titleCell.substring(getSymbolPos, titleCell.length);
  return title;
}

function ExtractBookAuthor(htmlString: string) {
  const authorPosition = htmlString.indexOf('<strong>Author(s)</strong>');
  const getOpeningCellTagAfterAuthor = htmlString.indexOf(
    '<td',
    authorPosition,
  );
  const getClosingCellTagAfterOpeningCellTag = htmlString.indexOf(
    '</td>',
    getOpeningCellTagAfterAuthor,
  );
  const authorCell = htmlString.substring(
    getOpeningCellTagAfterAuthor,
    getClosingCellTagAfterOpeningCellTag,
  );
  const getSymbolPos = authorCell.indexOf('>') + 1;
  const author = authorCell
    .substring(getSymbolPos, authorCell.length)
    .replace('&amp;', ' and');
  return author;
}

type imagesProp = {
  src: string;
  name: string;
};
type bookImage = string[];
function ExtractBookImages(images: imagesProp[]) {
  let bookImages = [] as bookImage;
  images.forEach(image => {
    bookImages.push(image.src);
  });
  return bookImages;
}

function ExtractPreviewUrl(htmlString: string) {
  const getHrefPosition = htmlString.lastIndexOf('href="');
  const getSymbolAfterHref = htmlString.indexOf('>', getHrefPosition);
  const previewUrl = htmlString
    .substring(getHrefPosition, getSymbolAfterHref)
    .replace('href="', '')
    .replace('"', '');
  return previewUrl;
}

export function formatBookProperties(book: any) {
  const bookDescription = book.description;
  const images = book.images;
  return {
    title: ExtractBookTitle(bookDescription),
    author: ExtractBookAuthor(bookDescription),
    description: ExtractBookDescription(bookDescription),
    images: ExtractBookImages(images),
    price: book.price,
    pdf: ExtractPreviewUrl(bookDescription),
    id: book.id,
    link: book.permalink,
  };
}

export function multiFormatBooksProperties(books: any[]) {
  let formattedBooks = [] as entities.Book[];
  books.forEach((book: any) => {
    formattedBooks.push(formatBookProperties(book) as any);
  });
  return formattedBooks;
}

export function formatCategories(data: any[]) {
  const categories: entities.BookCategories[] = data.map(item => ({
    name: item.name,
    count: item.count,
    id: item.id,
  }));
  return categories;
}

export function exchangeCustomerDataForm(data: any) {
  const formattedData = {
    firstName: data.first_name,
    lastName: data.last_name,
    address: data.billing.address_1,
    email: data.email,
    phoneNumber: data.billing.phone,
    state: data.billing.state,
    city: data.billing.city,
    id: data.id,
  };
  return formattedData;
}

export function handleFailedRequests(e: any) {
  let errorMessage: string;
  let requestStatus: number;

  if (e.response) {
    const {status, data} = e.response;

    errorMessage = data.message || e.message;

    requestStatus = status as number;
  } else {
    errorMessage = e.message;
    requestStatus = 0;
  }

  return {errorMessage, requestStatus};
}

export function ExtractOrdersInformation(fetchedOrders: any[], email: string) {
  let orders = [] as entities.Order[];
  fetchedOrders.forEach((data: any) => {
    if (data.billing.email === email) {
      let newlyMappedData = {
        customer_id: data.customer_id,
        total: data.total,
        date_created: data.date_created,
        line_items: [] as any[],
      };
      data.line_items.forEach((product: any) => {
        newlyMappedData.line_items.push({
          name: product.name,
          quantity: product.quantity,
          total: product.total,
          product_id: product.product_id,
          price: product.price,
        });
      });
      orders.push(newlyMappedData);
    }
  });

  return orders;
}

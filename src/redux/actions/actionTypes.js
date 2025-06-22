
export const PENDING="PENDING"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"




export function pending() {
    return {
        type: PENDING
    }
}

export function success(posts) {
    return {
        type: SUCCESS,
        payload:posts
  }  
}
export function failure(err) {
    return {
        type: FAILURE,
        payload:err
    }
}





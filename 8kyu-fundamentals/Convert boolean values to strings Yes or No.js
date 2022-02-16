function boolToWord( bool ){
    const a = bool.toString();
    if(a=='true')
        return 'Yes';
    else
        return 'No';
}
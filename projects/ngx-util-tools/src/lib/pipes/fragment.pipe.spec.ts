import { FragmentPipe } from './fragment.pipe';

describe('FragmentPipe', () => {
  it('create an instance', () => {
    const pipe = new FragmentPipe();
    expect(pipe).toBeTruthy();
  });

  describe('test FragmentPipe branches',()=>{

    const pipe = new FragmentPipe();

    it('uses default when non number provided',()=>{
      expect(pipe.transform('value','a')).toBe('value');
    });

    it('uses default when no argument provided',()=>{
      expect(pipe.transform('value')).toBe('value');
    });

    it('throws error when number is less than 1.',()=>{
      expect(function(){pipe.transform('value','-1')}).toThrowError('invalid value -1. Values can\'t be less than 1')
    })

    it('returns a fragment when a range is provided', ()=>{
      expect(pipe.transform('value','3')).toBe('val...')
    })

    it('returns value when range exceed the value length', ()=>{
      expect(pipe.transform('value','30')).toBe('value')
    })


  })
});



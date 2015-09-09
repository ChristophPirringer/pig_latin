describe('pig_latin', function() {
  it("returns 'eggay' for the word 'egg'", function() {
    expect(pig_latin("egg")).to.equal("eggay");
  });

  it("returns 'ellohay' for the word 'hello'", function() {
    expect(pig_latin("hello")).to.equal("ellohay");
  });

  it("returns 'ealsquay' for the word 'squeal'", function() {
    expect(pig_latin("squeal")).to.equal("ealsquay");
  });

  it("returns 'ellowyay' for the word 'yellow'", function() {
    expect(pig_latin("yellow")).to.equal("ellowyay");
  });

  it("returns 'ellowyay eggay' for the sentence 'yellow egg'", function() {
    expect(pig_latin("yellow egg")).to.equal("ellowyay eggay");
  });
});

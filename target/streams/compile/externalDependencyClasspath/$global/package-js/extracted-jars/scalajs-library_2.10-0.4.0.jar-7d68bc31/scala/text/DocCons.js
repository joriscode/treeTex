/** @constructor */
ScalaJS.c.scala_text_DocCons = (function() {
  ScalaJS.c.scala_text_Document.call(this);
  this.hd$2 = null;
  this.tl$2 = null
});
ScalaJS.c.scala_text_DocCons.prototype = new ScalaJS.inheritable.scala_text_Document();
ScalaJS.c.scala_text_DocCons.prototype.constructor = ScalaJS.c.scala_text_DocCons;
ScalaJS.c.scala_text_DocCons.prototype.hd__Lscala_text_Document = (function() {
  return this.hd$2
});
ScalaJS.c.scala_text_DocCons.prototype.tl__Lscala_text_Document = (function() {
  return this.tl$2
});
ScalaJS.c.scala_text_DocCons.prototype.copy__Lscala_text_Document__Lscala_text_Document__Lscala_text_DocCons = (function(hd, tl) {
  return new ScalaJS.c.scala_text_DocCons().init___Lscala_text_Document__Lscala_text_Document(hd, tl)
});
ScalaJS.c.scala_text_DocCons.prototype.copy$default$1__Lscala_text_Document = (function() {
  return this.hd__Lscala_text_Document()
});
ScalaJS.c.scala_text_DocCons.prototype.copy$default$2__Lscala_text_Document = (function() {
  return this.tl__Lscala_text_Document()
});
ScalaJS.c.scala_text_DocCons.prototype.productPrefix__T = (function() {
  return "DocCons"
});
ScalaJS.c.scala_text_DocCons.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_text_DocCons.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.hd__Lscala_text_Document();
        break
      };
    case 1:
      {
        return this.tl__Lscala_text_Document();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_text_DocCons.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_text_DocCons.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_text_DocCons(x$1)
});
ScalaJS.c.scala_text_DocCons.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_text_DocCons.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_text_DocCons.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_text_DocCons(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var DocCons$1 = ScalaJS.as.scala_text_DocCons(x$1);
      return ((ScalaJS.anyRefEqEq(this.hd__Lscala_text_Document(), DocCons$1.hd__Lscala_text_Document()) && ScalaJS.anyRefEqEq(this.tl__Lscala_text_Document(), DocCons$1.tl__Lscala_text_Document())) && DocCons$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_text_DocCons.prototype.init___Lscala_text_Document__Lscala_text_Document = (function(hd, tl) {
  this.hd$2 = hd;
  this.tl$2 = tl;
  ScalaJS.c.scala_text_Document.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_text_DocCons.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_text_DocCons.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_text_DocCons.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_text_DocCons.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_text_DocCons.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_text_DocCons.prototype.copy__Lscala_text_Document__Lscala_text_Document__ = (function(hd, tl) {
  return this.copy__Lscala_text_Document__Lscala_text_Document__Lscala_text_DocCons(hd, tl)
});
ScalaJS.c.scala_text_DocCons.prototype.tl__ = (function() {
  return this.tl__Lscala_text_Document()
});
ScalaJS.c.scala_text_DocCons.prototype.hd__ = (function() {
  return this.hd__Lscala_text_Document()
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocCons = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocCons.prototype = ScalaJS.c.scala_text_DocCons.prototype;
ScalaJS.is.scala_text_DocCons = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocCons)))
});
ScalaJS.as.scala_text_DocCons = (function(obj) {
  if ((ScalaJS.is.scala_text_DocCons(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocCons")
  }
});
ScalaJS.isArrayOf.scala_text_DocCons = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocCons)))
});
ScalaJS.asArrayOf.scala_text_DocCons = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocCons(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocCons;", depth)
  }
});
ScalaJS.data.scala_text_DocCons = new ScalaJS.ClassTypeData({
  scala_text_DocCons: 0
}, false, "scala.text.DocCons", ScalaJS.data.scala_text_Document, {
  scala_text_DocCons: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_text_Document: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocCons.prototype.$classData = ScalaJS.data.scala_text_DocCons;
//@ sourceMappingURL=DocCons.js.map

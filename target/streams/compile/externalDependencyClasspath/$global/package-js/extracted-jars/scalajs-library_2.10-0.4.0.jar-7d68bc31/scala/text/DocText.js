/** @constructor */
ScalaJS.c.scala_text_DocText = (function() {
  ScalaJS.c.scala_text_Document.call(this);
  this.txt$2 = null
});
ScalaJS.c.scala_text_DocText.prototype = new ScalaJS.inheritable.scala_text_Document();
ScalaJS.c.scala_text_DocText.prototype.constructor = ScalaJS.c.scala_text_DocText;
ScalaJS.c.scala_text_DocText.prototype.txt__T = (function() {
  return this.txt$2
});
ScalaJS.c.scala_text_DocText.prototype.copy__T__Lscala_text_DocText = (function(txt) {
  return new ScalaJS.c.scala_text_DocText().init___T(txt)
});
ScalaJS.c.scala_text_DocText.prototype.copy$default$1__T = (function() {
  return this.txt__T()
});
ScalaJS.c.scala_text_DocText.prototype.productPrefix__T = (function() {
  return "DocText"
});
ScalaJS.c.scala_text_DocText.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_text_DocText.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.txt__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_text_DocText.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_text_DocText.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_text_DocText(x$1)
});
ScalaJS.c.scala_text_DocText.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_text_DocText.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_text_DocText.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_text_DocText(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var DocText$1 = ScalaJS.as.scala_text_DocText(x$1);
      return (ScalaJS.anyRefEqEq(this.txt__T(), DocText$1.txt__T()) && DocText$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_text_DocText.prototype.init___T = (function(txt) {
  this.txt$2 = txt;
  ScalaJS.c.scala_text_Document.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_text_DocText.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_text_DocText.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_text_DocText.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_text_DocText.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_text_DocText.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_text_DocText.prototype.copy__T__ = (function(txt) {
  return this.copy__T__Lscala_text_DocText(txt)
});
ScalaJS.c.scala_text_DocText.prototype.txt__ = (function() {
  return this.txt__T()
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocText = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocText.prototype = ScalaJS.c.scala_text_DocText.prototype;
ScalaJS.is.scala_text_DocText = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocText)))
});
ScalaJS.as.scala_text_DocText = (function(obj) {
  if ((ScalaJS.is.scala_text_DocText(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocText")
  }
});
ScalaJS.isArrayOf.scala_text_DocText = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocText)))
});
ScalaJS.asArrayOf.scala_text_DocText = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocText(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocText;", depth)
  }
});
ScalaJS.data.scala_text_DocText = new ScalaJS.ClassTypeData({
  scala_text_DocText: 0
}, false, "scala.text.DocText", ScalaJS.data.scala_text_Document, {
  scala_text_DocText: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_text_Document: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocText.prototype.$classData = ScalaJS.data.scala_text_DocText;
//@ sourceMappingURL=DocText.js.map

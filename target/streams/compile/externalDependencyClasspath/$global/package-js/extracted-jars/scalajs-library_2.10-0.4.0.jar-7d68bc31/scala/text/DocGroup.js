/** @constructor */
ScalaJS.c.scala_text_DocGroup = (function() {
  ScalaJS.c.scala_text_Document.call(this);
  this.doc$2 = null
});
ScalaJS.c.scala_text_DocGroup.prototype = new ScalaJS.inheritable.scala_text_Document();
ScalaJS.c.scala_text_DocGroup.prototype.constructor = ScalaJS.c.scala_text_DocGroup;
ScalaJS.c.scala_text_DocGroup.prototype.doc__Lscala_text_Document = (function() {
  return this.doc$2
});
ScalaJS.c.scala_text_DocGroup.prototype.copy__Lscala_text_Document__Lscala_text_DocGroup = (function(doc) {
  return new ScalaJS.c.scala_text_DocGroup().init___Lscala_text_Document(doc)
});
ScalaJS.c.scala_text_DocGroup.prototype.copy$default$1__Lscala_text_Document = (function() {
  return this.doc__Lscala_text_Document()
});
ScalaJS.c.scala_text_DocGroup.prototype.productPrefix__T = (function() {
  return "DocGroup"
});
ScalaJS.c.scala_text_DocGroup.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_text_DocGroup.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.doc__Lscala_text_Document();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_text_DocGroup.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_text_DocGroup.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_text_DocGroup(x$1)
});
ScalaJS.c.scala_text_DocGroup.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_text_DocGroup.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_text_DocGroup.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_text_DocGroup(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var DocGroup$1 = ScalaJS.as.scala_text_DocGroup(x$1);
      return (ScalaJS.anyRefEqEq(this.doc__Lscala_text_Document(), DocGroup$1.doc__Lscala_text_Document()) && DocGroup$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_text_DocGroup.prototype.init___Lscala_text_Document = (function(doc) {
  this.doc$2 = doc;
  ScalaJS.c.scala_text_Document.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_text_DocGroup.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_text_DocGroup.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_text_DocGroup.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_text_DocGroup.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_text_DocGroup.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_text_DocGroup.prototype.copy__Lscala_text_Document__ = (function(doc) {
  return this.copy__Lscala_text_Document__Lscala_text_DocGroup(doc)
});
ScalaJS.c.scala_text_DocGroup.prototype.doc__ = (function() {
  return this.doc__Lscala_text_Document()
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocGroup = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocGroup.prototype = ScalaJS.c.scala_text_DocGroup.prototype;
ScalaJS.is.scala_text_DocGroup = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocGroup)))
});
ScalaJS.as.scala_text_DocGroup = (function(obj) {
  if ((ScalaJS.is.scala_text_DocGroup(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocGroup")
  }
});
ScalaJS.isArrayOf.scala_text_DocGroup = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocGroup)))
});
ScalaJS.asArrayOf.scala_text_DocGroup = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocGroup(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocGroup;", depth)
  }
});
ScalaJS.data.scala_text_DocGroup = new ScalaJS.ClassTypeData({
  scala_text_DocGroup: 0
}, false, "scala.text.DocGroup", ScalaJS.data.scala_text_Document, {
  scala_text_DocGroup: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_text_Document: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocGroup.prototype.$classData = ScalaJS.data.scala_text_DocGroup;
//@ sourceMappingURL=DocGroup.js.map

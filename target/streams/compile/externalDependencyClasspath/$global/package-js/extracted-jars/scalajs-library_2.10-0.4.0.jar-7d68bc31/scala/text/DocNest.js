/** @constructor */
ScalaJS.c.scala_text_DocNest = (function() {
  ScalaJS.c.scala_text_Document.call(this);
  this.indent$2 = 0;
  this.doc$2 = null
});
ScalaJS.c.scala_text_DocNest.prototype = new ScalaJS.inheritable.scala_text_Document();
ScalaJS.c.scala_text_DocNest.prototype.constructor = ScalaJS.c.scala_text_DocNest;
ScalaJS.c.scala_text_DocNest.prototype.indent__I = (function() {
  return this.indent$2
});
ScalaJS.c.scala_text_DocNest.prototype.doc__Lscala_text_Document = (function() {
  return this.doc$2
});
ScalaJS.c.scala_text_DocNest.prototype.copy__I__Lscala_text_Document__Lscala_text_DocNest = (function(indent, doc) {
  return new ScalaJS.c.scala_text_DocNest().init___I__Lscala_text_Document(indent, doc)
});
ScalaJS.c.scala_text_DocNest.prototype.copy$default$1__I = (function() {
  return this.indent__I()
});
ScalaJS.c.scala_text_DocNest.prototype.copy$default$2__Lscala_text_Document = (function() {
  return this.doc__Lscala_text_Document()
});
ScalaJS.c.scala_text_DocNest.prototype.productPrefix__T = (function() {
  return "DocNest"
});
ScalaJS.c.scala_text_DocNest.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_text_DocNest.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return ScalaJS.bI(this.indent__I());
        break
      };
    case 1:
      {
        return this.doc__Lscala_text_Document();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_text_DocNest.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_text_DocNest.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_text_DocNest(x$1)
});
ScalaJS.c.scala_text_DocNest.prototype.hashCode__I = (function() {
  var acc = -889275714;
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, this.indent__I());
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, ScalaJS.modules.scala_runtime_Statics().anyHash__O__I(this.doc__Lscala_text_Document()));
  return ScalaJS.modules.scala_runtime_Statics().finalizeHash__I__I__I(acc, 2)
});
ScalaJS.c.scala_text_DocNest.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_text_DocNest.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_text_DocNest(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var DocNest$1 = ScalaJS.as.scala_text_DocNest(x$1);
      return (((this.indent__I() === DocNest$1.indent__I()) && ScalaJS.anyRefEqEq(this.doc__Lscala_text_Document(), DocNest$1.doc__Lscala_text_Document())) && DocNest$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_text_DocNest.prototype.init___I__Lscala_text_Document = (function(indent, doc) {
  this.indent$2 = indent;
  this.doc$2 = doc;
  ScalaJS.c.scala_text_Document.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_text_DocNest.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_text_DocNest.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_text_DocNest.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_text_DocNest.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_text_DocNest.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_text_DocNest.prototype.copy__I__Lscala_text_Document__ = (function(indent, doc) {
  return this.copy__I__Lscala_text_Document__Lscala_text_DocNest(indent, doc)
});
ScalaJS.c.scala_text_DocNest.prototype.doc__ = (function() {
  return this.doc__Lscala_text_Document()
});
ScalaJS.c.scala_text_DocNest.prototype.indent__ = (function() {
  return ScalaJS.bI(this.indent__I())
});
/** @constructor */
ScalaJS.inheritable.scala_text_DocNest = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_text_DocNest.prototype = ScalaJS.c.scala_text_DocNest.prototype;
ScalaJS.is.scala_text_DocNest = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_text_DocNest)))
});
ScalaJS.as.scala_text_DocNest = (function(obj) {
  if ((ScalaJS.is.scala_text_DocNest(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.text.DocNest")
  }
});
ScalaJS.isArrayOf.scala_text_DocNest = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_text_DocNest)))
});
ScalaJS.asArrayOf.scala_text_DocNest = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_text_DocNest(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.text.DocNest;", depth)
  }
});
ScalaJS.data.scala_text_DocNest = new ScalaJS.ClassTypeData({
  scala_text_DocNest: 0
}, false, "scala.text.DocNest", ScalaJS.data.scala_text_Document, {
  scala_text_DocNest: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_text_Document: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_text_DocNest.prototype.$classData = ScalaJS.data.scala_text_DocNest;
//@ sourceMappingURL=DocNest.js.map

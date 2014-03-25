/** @constructor */
ScalaJS.c.scala_xml_PrettyPrinter$Para = (function() {
  ScalaJS.c.scala_xml_PrettyPrinter$Item.call(this);
  this.s$2 = null
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype = new ScalaJS.inheritable.scala_xml_PrettyPrinter$Item();
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.constructor = ScalaJS.c.scala_xml_PrettyPrinter$Para;
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.s__T = (function() {
  return this.s$2
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.copy__T__Lscala_xml_PrettyPrinter$Para = (function(s) {
  return new ScalaJS.c.scala_xml_PrettyPrinter$Para().init___Lscala_xml_PrettyPrinter__T(this.scala$xml$PrettyPrinter$Para$$$outer__Lscala_xml_PrettyPrinter(), s)
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.copy$default$1__T = (function() {
  return this.s__T()
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.productPrefix__T = (function() {
  return "Para"
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.s__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_PrettyPrinter$Para(x$1)
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_xml_PrettyPrinter$Para(x1) && (ScalaJS.as.scala_xml_PrettyPrinter$Para(x1).scala$xml$PrettyPrinter$Para$$$outer__Lscala_xml_PrettyPrinter() === this.scala$xml$PrettyPrinter$Para$$$outer__Lscala_xml_PrettyPrinter()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Para$1 = ScalaJS.as.scala_xml_PrettyPrinter$Para(x$1);
      return (ScalaJS.anyRefEqEq(this.s__T(), Para$1.s__T()) && Para$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.scala$xml$PrettyPrinter$Para$$$outer__Lscala_xml_PrettyPrinter = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.init___Lscala_xml_PrettyPrinter__T = (function($$outer, s) {
  this.s$2 = s;
  ScalaJS.c.scala_xml_PrettyPrinter$Item.prototype.init___Lscala_xml_PrettyPrinter.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.scala$xml$PrettyPrinter$Para$$$outer__ = (function() {
  return this.scala$xml$PrettyPrinter$Para$$$outer__Lscala_xml_PrettyPrinter()
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.copy__T__ = (function(s) {
  return this.copy__T__Lscala_xml_PrettyPrinter$Para(s)
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.s__ = (function() {
  return this.s__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_PrettyPrinter$Para = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_PrettyPrinter$Para.prototype = ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype;
ScalaJS.is.scala_xml_PrettyPrinter$Para = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_PrettyPrinter$Para)))
});
ScalaJS.as.scala_xml_PrettyPrinter$Para = (function(obj) {
  if ((ScalaJS.is.scala_xml_PrettyPrinter$Para(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.PrettyPrinter$Para")
  }
});
ScalaJS.isArrayOf.scala_xml_PrettyPrinter$Para = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_PrettyPrinter$Para)))
});
ScalaJS.asArrayOf.scala_xml_PrettyPrinter$Para = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_PrettyPrinter$Para(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.PrettyPrinter$Para;", depth)
  }
});
ScalaJS.data.scala_xml_PrettyPrinter$Para = new ScalaJS.ClassTypeData({
  scala_xml_PrettyPrinter$Para: 0
}, false, "scala.xml.PrettyPrinter$Para", ScalaJS.data.scala_xml_PrettyPrinter$Item, {
  scala_xml_PrettyPrinter$Para: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_PrettyPrinter$Item: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_PrettyPrinter$Para.prototype.$classData = ScalaJS.data.scala_xml_PrettyPrinter$Para;
//@ sourceMappingURL=PrettyPrinter$Para.js.map

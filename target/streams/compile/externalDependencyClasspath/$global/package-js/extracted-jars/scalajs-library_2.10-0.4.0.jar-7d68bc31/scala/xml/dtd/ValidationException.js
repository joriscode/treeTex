/** @constructor */
ScalaJS.c.scala_xml_dtd_ValidationException = (function() {
  ScalaJS.c.java_lang_Exception.call(this);
  this.e$3 = null
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype = new ScalaJS.inheritable.java_lang_Exception();
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.constructor = ScalaJS.c.scala_xml_dtd_ValidationException;
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.e__T = (function() {
  return this.e$3
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.copy__T__Lscala_xml_dtd_ValidationException = (function(e) {
  return new ScalaJS.c.scala_xml_dtd_ValidationException().init___T(e)
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.copy$default$1__T = (function() {
  return this.e__T()
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.productPrefix__T = (function() {
  return "ValidationException"
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.e__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_ValidationException(x$1)
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_dtd_ValidationException(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var ValidationException$1 = ScalaJS.as.scala_xml_dtd_ValidationException(x$1);
      return (ScalaJS.anyRefEqEq(this.e__T(), ValidationException$1.e__T()) && ValidationException$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.init___T = (function(e) {
  this.e$3 = e;
  ScalaJS.c.java_lang_Exception.prototype.init___T.call(this, e);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.copy__T__ = (function(e) {
  return this.copy__T__Lscala_xml_dtd_ValidationException(e)
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.e__ = (function() {
  return this.e__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_ValidationException = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_ValidationException.prototype = ScalaJS.c.scala_xml_dtd_ValidationException.prototype;
ScalaJS.is.scala_xml_dtd_ValidationException = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_ValidationException)))
});
ScalaJS.as.scala_xml_dtd_ValidationException = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_ValidationException(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.ValidationException")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_ValidationException = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_ValidationException)))
});
ScalaJS.asArrayOf.scala_xml_dtd_ValidationException = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_ValidationException(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.ValidationException;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_ValidationException = new ScalaJS.ClassTypeData({
  scala_xml_dtd_ValidationException: 0
}, false, "scala.xml.dtd.ValidationException", ScalaJS.data.java_lang_Exception, {
  scala_xml_dtd_ValidationException: 1,
  scala_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  java_lang_Exception: 1,
  java_lang_Throwable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_ValidationException.prototype.$classData = ScalaJS.data.scala_xml_dtd_ValidationException;
//@ sourceMappingURL=ValidationException.js.map

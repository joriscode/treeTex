/** @constructor */
ScalaJS.c.scala_xml_PrettyPrinter$Box = (function() {
  ScalaJS.c.scala_xml_PrettyPrinter$Item.call(this);
  this.col$2 = 0;
  this.s$2 = null
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype = new ScalaJS.inheritable.scala_xml_PrettyPrinter$Item();
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.constructor = ScalaJS.c.scala_xml_PrettyPrinter$Box;
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.col__I = (function() {
  return this.col$2
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.s__T = (function() {
  return this.s$2
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.copy__I__T__Lscala_xml_PrettyPrinter$Box = (function(col, s) {
  return new ScalaJS.c.scala_xml_PrettyPrinter$Box().init___Lscala_xml_PrettyPrinter__I__T(this.scala$xml$PrettyPrinter$Box$$$outer__Lscala_xml_PrettyPrinter(), col, s)
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.copy$default$1__I = (function() {
  return this.col__I()
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.copy$default$2__T = (function() {
  return this.s__T()
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.productPrefix__T = (function() {
  return "Box"
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return ScalaJS.bI(this.col__I());
        break
      };
    case 1:
      {
        return this.s__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_PrettyPrinter$Box(x$1)
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.hashCode__I = (function() {
  var acc = -889275714;
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, this.col__I());
  acc = ScalaJS.modules.scala_runtime_Statics().mix__I__I__I(acc, ScalaJS.modules.scala_runtime_Statics().anyHash__O__I(this.s__T()));
  return ScalaJS.modules.scala_runtime_Statics().finalizeHash__I__I__I(acc, 2)
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if ((ScalaJS.is.scala_xml_PrettyPrinter$Box(x1) && (ScalaJS.as.scala_xml_PrettyPrinter$Box(x1).scala$xml$PrettyPrinter$Box$$$outer__Lscala_xml_PrettyPrinter() === this.scala$xml$PrettyPrinter$Box$$$outer__Lscala_xml_PrettyPrinter()))) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var Box$1 = ScalaJS.as.scala_xml_PrettyPrinter$Box(x$1);
      return (((this.col__I() === Box$1.col__I()) && ScalaJS.anyRefEqEq(this.s__T(), Box$1.s__T())) && Box$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.scala$xml$PrettyPrinter$Box$$$outer__Lscala_xml_PrettyPrinter = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.init___Lscala_xml_PrettyPrinter__I__T = (function($$outer, col, s) {
  this.col$2 = col;
  this.s$2 = s;
  ScalaJS.c.scala_xml_PrettyPrinter$Item.prototype.init___Lscala_xml_PrettyPrinter.call(this, $$outer);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.scala$xml$PrettyPrinter$Box$$$outer__ = (function() {
  return this.scala$xml$PrettyPrinter$Box$$$outer__Lscala_xml_PrettyPrinter()
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.copy__I__T__ = (function(col, s) {
  return this.copy__I__T__Lscala_xml_PrettyPrinter$Box(col, s)
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.s__ = (function() {
  return this.s__T()
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.col__ = (function() {
  return ScalaJS.bI(this.col__I())
});
/** @constructor */
ScalaJS.inheritable.scala_xml_PrettyPrinter$Box = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_PrettyPrinter$Box.prototype = ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype;
ScalaJS.is.scala_xml_PrettyPrinter$Box = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_PrettyPrinter$Box)))
});
ScalaJS.as.scala_xml_PrettyPrinter$Box = (function(obj) {
  if ((ScalaJS.is.scala_xml_PrettyPrinter$Box(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.PrettyPrinter$Box")
  }
});
ScalaJS.isArrayOf.scala_xml_PrettyPrinter$Box = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_PrettyPrinter$Box)))
});
ScalaJS.asArrayOf.scala_xml_PrettyPrinter$Box = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_PrettyPrinter$Box(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.PrettyPrinter$Box;", depth)
  }
});
ScalaJS.data.scala_xml_PrettyPrinter$Box = new ScalaJS.ClassTypeData({
  scala_xml_PrettyPrinter$Box: 0
}, false, "scala.xml.PrettyPrinter$Box", ScalaJS.data.scala_xml_PrettyPrinter$Item, {
  scala_xml_PrettyPrinter$Box: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_PrettyPrinter$Item: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_PrettyPrinter$Box.prototype.$classData = ScalaJS.data.scala_xml_PrettyPrinter$Box;
//@ sourceMappingURL=PrettyPrinter$Box.js.map

/** @constructor */
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead = (function() {
  ScalaJS.c.scala_io_Source.call(this);
  this.scala$xml$parsing$MarkupParser$WithLookAhead$$underlying$f = null;
  this.scala$xml$parsing$MarkupParser$WithLookAhead$$queue$2 = null;
  this.iter$2 = null;
  this.$$outer$f = null
});
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype = new ScalaJS.inheritable.scala_io_Source();
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.constructor = ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead;
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.scala$xml$parsing$MarkupParser$WithLookAhead$$queue__Lscala_collection_mutable_Queue = (function() {
  return this.scala$xml$parsing$MarkupParser$WithLookAhead$$queue$2
});
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.lookahead__Lscala_collection_BufferedIterator = (function() {
  var iter = this.scala$xml$parsing$MarkupParser$WithLookAhead$$queue__Lscala_collection_mutable_Queue().iterator__Lscala_collection_Iterator().$$plus$plus__Lscala_Function0__Lscala_collection_Iterator(new ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead$$anonfun$3().init___Lscala_xml_parsing_MarkupParser$WithLookAhead(this));
  return iter.buffered__Lscala_collection_BufferedIterator()
});
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.iter__Lscala_collection_Iterator = (function() {
  return this.iter$2
});
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.scala$xml$parsing$MarkupParser$WithLookAhead$$$outer__Lscala_xml_parsing_MarkupHandler = (function() {
  return this.$$outer$f
});
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.init___Lscala_xml_parsing_MarkupHandler__Lscala_io_Source = (function($$outer, underlying) {
  this.scala$xml$parsing$MarkupParser$WithLookAhead$$underlying$f = underlying;
  if (($$outer === null)) {
    throw new ScalaJS.c.java_lang_NullPointerException().init___()
  } else {
    this.$$outer$f = $$outer
  };
  ScalaJS.c.scala_io_Source.prototype.init___.call(this);
  this.scala$xml$parsing$MarkupParser$WithLookAhead$$queue$2 = ScalaJS.as.scala_collection_mutable_Queue(ScalaJS.modules.scala_collection_mutable_Queue().apply__Lscala_collection_Seq__Lscala_collection_GenTraversable(ScalaJS.modules.scala_collection_immutable_Nil()));
  this.iter$2 = new ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead$$anon$2().init___Lscala_xml_parsing_MarkupParser$WithLookAhead(this);
  return this
});
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.scala$xml$parsing$MarkupParser$WithLookAhead$$$outer__ = (function() {
  return this.scala$xml$parsing$MarkupParser$WithLookAhead$$$outer__Lscala_xml_parsing_MarkupHandler()
});
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.lookahead__ = (function() {
  return this.lookahead__Lscala_collection_BufferedIterator()
});
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.scala$xml$parsing$MarkupParser$WithLookAhead$$queue__ = (function() {
  return this.scala$xml$parsing$MarkupParser$WithLookAhead$$queue__Lscala_collection_mutable_Queue()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_MarkupParser$WithLookAhead = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_MarkupParser$WithLookAhead.prototype = ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype;
ScalaJS.is.scala_xml_parsing_MarkupParser$WithLookAhead = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_MarkupParser$WithLookAhead)))
});
ScalaJS.as.scala_xml_parsing_MarkupParser$WithLookAhead = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_MarkupParser$WithLookAhead(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.MarkupParser$WithLookAhead")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_MarkupParser$WithLookAhead = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_MarkupParser$WithLookAhead)))
});
ScalaJS.asArrayOf.scala_xml_parsing_MarkupParser$WithLookAhead = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_MarkupParser$WithLookAhead(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.MarkupParser$WithLookAhead;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_MarkupParser$WithLookAhead = new ScalaJS.ClassTypeData({
  scala_xml_parsing_MarkupParser$WithLookAhead: 0
}, false, "scala.xml.parsing.MarkupParser$WithLookAhead", ScalaJS.data.scala_io_Source, {
  scala_xml_parsing_MarkupParser$WithLookAhead: 1,
  scala_io_Source: 1,
  scala_collection_Iterator: 1,
  scala_collection_TraversableOnce: 1,
  scala_collection_GenTraversableOnce: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_MarkupParser$WithLookAhead.prototype.$classData = ScalaJS.data.scala_xml_parsing_MarkupParser$WithLookAhead;
//@ sourceMappingURL=MarkupParser$WithLookAhead.js.map
